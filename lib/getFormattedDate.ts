const getFormattedDate = (date: Date) => {
  return (
    (date.getMonth() + 1).toString().padStart(2, "0") + "/" + date.getFullYear()
  );
};

export default getFormattedDate;
