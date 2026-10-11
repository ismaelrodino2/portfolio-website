import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Icon from "./Icon";

export type Shot = {
  src: string;
  width: number;
  height: number;
  /** Short caption, already translated. */
  label: string;
};

type Props = {
  shots: Shot[];
  /** `browser` frames desktop screens; `phone` frames mobile screens. */
  variant: "browser" | "phone";
  /** Shown in the browser frame's address bar. */
  address?: string;
};

const Lightbox = ({
  shots,
  index,
  onChange,
  onClose
}: {
  shots: Shot[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) => {
  const { t } = useTranslation("common");
  const shot = shots[index];
  const step = useCallback(
    (delta: number) => onChange((index + delta + shots.length) % shots.length),
    [index, onChange, shots.length]
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, step]);

  const navButton =
    "absolute top-1/2 -translate-y-1/2 transform rounded-full border border-white border-opacity-20 bg-black bg-opacity-50 p-3 text-white transition-colors hover:bg-opacity-80";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={shot.label}
      className="lightbox fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label={t("gallery.close")}
        className="absolute right-4 top-4 rounded-full p-2 text-white text-opacity-80 transition-colors hover:text-opacity-100"
        onClick={onClose}
      >
        <Icon name="close" className="h-6 w-6" />
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        alt={shot.label}
        className="max-h-[80vh] max-w-full rounded-xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
      <p className="mt-4 text-sm text-white text-opacity-80">
        {shot.label}
        <span className="ml-3 font-mono text-xs text-white text-opacity-50">
          {index + 1} / {shots.length}
        </span>
      </p>

      {shots.length > 1 && (
        <>
          <button
            type="button"
            aria-label={t("gallery.previous")}
            className={`${navButton} left-3 sm:left-6`}
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
          >
            <Icon name="chevronLeft" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={t("gallery.next")}
            className={`${navButton} right-3 sm:right-6`}
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          >
            <Icon name="chevronRight" className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
};

const BrowserGallery = ({
  shots,
  address,
  onOpen
}: {
  shots: Shot[];
  address?: string;
  onOpen: (index: number) => void;
}) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line-strong bg-raised shadow-xl">
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto min-w-0 max-w-xs flex-1 truncate rounded-md bg-surface px-3 py-1 text-center font-mono text-xs text-faint">
            {address ? `${address} · ` : ""}
            {shot.label}
          </div>
          <div className="w-10" aria-hidden="true" />
        </div>
        <button
          type="button"
          className="group relative block w-full cursor-zoom-in"
          aria-label={`${t("gallery.expand")}: ${shot.label}`}
          onClick={() => onOpen(active)}
        >
          <Image
            src={shot.src}
            width={shot.width}
            height={shot.height}
            alt={shot.label}
            layout="responsive"
            sizes="(min-width: 1280px) 64rem, 100vw"
          />
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-black bg-opacity-60 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Icon name="expand" className="h-3.5 w-3.5" />
            {t("gallery.expand")}
          </span>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
        {shots.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-label={item.label}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            className={`overflow-hidden rounded-lg border transition-all ${
              index === active
                ? "border-accent ring-2 ring-accent ring-opacity-40"
                : "border-line opacity-60 hover:opacity-100"
            }`}
          >
            <span className="block">
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt=""
                layout="responsive"
                sizes="8rem"
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const PhoneGallery = ({
  shots,
  onOpen
}: {
  shots: Shot[];
  onOpen: (index: number) => void;
}) => {
  const { t } = useTranslation("common");
  const row = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = row.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const scroll = (direction: 1 | -1) => {
    const el = row.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const arrow =
    "rounded-full border border-line bg-raised p-2 text-muted transition-colors hover:border-line-strong hover:text-ink disabled:cursor-default disabled:opacity-30 disabled:hover:border-line disabled:hover:text-muted";

  return (
    <div>
    <ul
      ref={row}
      onScroll={measure}
      className="no-scrollbar -mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8"
    >
      {shots.map((shot, index) => (
        <li key={shot.src} className="w-40 flex-shrink-0 snap-start sm:w-44">
          <button
            type="button"
            aria-label={`${t("gallery.expand")}: ${shot.label}`}
            onClick={() => onOpen(index)}
            className="group block w-full cursor-zoom-in"
          >
            <span className="block rounded-[1.75rem] border border-line-strong bg-raised p-1.5 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 transform">
              <span className="block overflow-hidden rounded-[1.4rem]">
                <Image
                  src={shot.src}
                  width={shot.width}
                  height={shot.height}
                  alt={shot.label}
                  layout="responsive"
                  sizes="11rem"
                />
              </span>
            </span>
            <span className="mt-3 block text-center text-xs text-muted">{shot.label}</span>
          </button>
        </li>
      ))}
    </ul>
    {!(edges.start && edges.end) && (
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label={t("gallery.previous")}
          className={arrow}
          disabled={edges.start}
          onClick={() => scroll(-1)}
        >
          <Icon name="chevronLeft" className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label={t("gallery.next")}
          className={arrow}
          disabled={edges.end}
          onClick={() => scroll(1)}
        >
          <Icon name="chevronRight" className="h-4 w-4" />
        </button>
      </div>
    )}
    </div>
  );
};

const ScreenGallery = ({ shots, variant, address }: Props) => {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);

  if (shots.length === 0) return null;

  return (
    <div className="print:hidden">
      {variant === "browser" ? (
        <BrowserGallery shots={shots} address={address} onOpen={setOpen} />
      ) : (
        <PhoneGallery shots={shots} onOpen={setOpen} />
      )}
      {open !== null && (
        <Lightbox shots={shots} index={open} onChange={setOpen} onClose={close} />
      )}
    </div>
  );
};

export default ScreenGallery;
