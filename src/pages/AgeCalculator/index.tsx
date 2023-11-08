import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
interface DateType {
  day: number;
  month: number;
  year: number;
}
const AgeCalculator = () => {
  const [submitted, setSubmitted] = useState(false);
  const [currentDate, setCurrentDate] = useState<DateType>({
    day: -1,
    month: -1,
    year: -1,
  });
  const [err, setErr] = useState({
    day: "",
    month: "",
    year: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const day = e.target.dayInput.value;
    const month = e.target.monthInput.value;
    const year = e.target.yearInput.value;
    const inputDate = new Date(year, month - 1, day);
    const todayDate = new Date();
    let years = todayDate.getFullYear() - inputDate.getFullYear();
    let months = todayDate.getMonth() - inputDate.getMonth();
    let days = todayDate.getDate() - inputDate.getDate();
    if (!day || !month || !year) {
      if (day === "") {
        setErr((err) => ({
          ...err,
          day: "This field is required",
        }));
      }
      if (month === "") {
        setErr((err) => ({
          ...err,
          month: "This field is required",
        }));
      }
      if (year === "") {
        setErr((err) => ({
          ...err,
          year: "This field is required",
        }));
      }
    } else {
      setErr({
        day: "",
        month: "",
        year: "",
      });
      if (day < 1 || day > 31) {
        setErr((err) => ({ ...err, day: "Input valid day" }));
      }
      if (month < 1 || month > 12) {
        setErr((err) => ({ ...err, month: "Must be a valid month" }));
      }
      if (inputDate > todayDate) {
        setErr((err) => ({ ...err, day: "Date is in the future!" }));
      }
      console.log(err.day);
    }
    console.log(err.day === "");
    if (
      err.day === "" &&
      err.month === "" &&
      err.year === "" &&
      day !== "" &&
      month !== "" &&
      year !== ""
    ) {
      console.log("Masuk");
      if (days < 0) {
        months--;
        days += new Date(
          todayDate.getFullYear(),
          todayDate.getMonth(),
          0,
        ).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }
      setCurrentDate(() => {
        return { day: days, month: months, year: years };
      });
    }
    setSubmitted(true);
  };
  return (
    <main className={poppins.className}>
      <div className="flex h-screen w-screen items-center justify-center bg-[hsl(0_0%_94%)]">
        <div className="h-[486px] w-[339px] rounded-[25px] rounded-br-[100px] bg-white p-6 leading-[1.1] xl:h-[651px] xl:w-[840px] xl:p-14">
          <form onSubmit={handleSubmit}>
            <div onClick={() => setSubmitted(false)} className="flex gap-4">
              <label
                className="flex flex-col text-[12px] font-semibold uppercase xl:text-[14px]"
                htmlFor="dayInput"
              >
                <span className="mb-[5px] xl:mb-[9px]">Day</span>
                <input
                  placeholder="DD"
                  className={`${
                    err.day ? "outline outline-1 outline-red-500" : ""
                  } no-spinner h-[52px] w-[86px] rounded-[5px] border border-[hsl(0_0%_86%)] px-[15px] text-[20px] focus:outline-[hsl(259_100%_65%)] xl:h-[70px] xl:w-[158px] xl:px-6 xl:text-[32px]`}
                  type="number"
                  name="dayInput"
                  id="dayInput"
                />
                {err.day && (
                  <p className="pt-3 text-[8px] font-normal normal-case italic text-red-500 xl:text-[14px]">
                    {err.day}
                  </p>
                )}
              </label>
              <label
                className="flex flex-col text-[12px] font-semibold uppercase xl:text-[14px]"
                htmlFor="monthInput"
              >
                <span className="mb-[5px] xl:mb-[9px]">Month</span>
                <input
                  placeholder="MM"
                  className={`${
                    err.month ? "outline outline-1 outline-red-500" : ""
                  } no-spinner h-[52px] w-[86px] rounded-[5px] border border-[hsl(0_0%_86%)] px-[15px] text-[20px] focus:outline-[hsl(259_100%_65%)] xl:h-[70px] xl:w-[158px] xl:px-6 xl:text-[32px]`}
                  type="number"
                  name="monthInput"
                  id="monthInput"
                />
                {err.month && (
                  <p className="pt-3 text-[8px] font-normal normal-case italic text-red-500 xl:text-[14px]">
                    {err.month}
                  </p>
                )}
              </label>
              <label
                className="flex flex-col text-[12px] font-semibold uppercase xl:text-[14px]"
                htmlFor="yearInput"
              >
                <span className="mb-[5px] xl:mb-[9px]">Year</span>
                <input
                  placeholder="YY"
                  className={`${
                    err.year ? "outline outline-1 outline-red-500" : ""
                  } no-spinner h-[52px] w-[86px] rounded-[5px] border border-[hsl(0_0%_86%)] px-[15px] text-[20px] focus:outline-[hsl(259_100%_65%)] xl:h-[70px] xl:w-[158px] xl:px-6 xl:text-[32px]`}
                  type="number"
                  name="yearInput"
                  id="yearInput"
                />
                {err.year && (
                  <p className="pt-3 text-[8px] font-normal normal-case italic text-red-500 xl:text-[14px]">
                    {err.year}
                  </p>
                )}
              </label>
            </div>
            <div className="relative mt-8 mb-6 flex items-center justify-center xl:my-0">
              <div className="absolute top-1/2 z-10 h-[2px] w-full bg-[hsl(0_0%_86%)] xl:relative" />
              <button
                type="submit"
                className={`${
                  submitted ? "bg-[hsl(259_100%_65%)]" : "bg-black"
                } z-20 flex h-[66px] w-[66px] items-center justify-center rounded-full xl:h-[96px] xl:flex-[0_0_96px]`}
              >
                <span className="h-6 w-[26px] xl:h-11 xl:w-[46px]">
                  <Image
                    width={48}
                    height={44}
                    src={"./images/AgeCalculator/icon-arrow.svg"}
                    alt="arrow"
                  />
                </span>
              </button>
            </div>
          </form>
          <div className="text-[54px] font-extrabold italic xl:text-[100px]">
            <p>
              <span className="text-[hsl(259_100%_65%)]">
                {currentDate.year !== -1 ? currentDate.year : "- -"}
              </span>{" "}
              years
            </p>
            <p>
              <span className="text-[hsl(259_100%_65%)]">
                {currentDate.month !== -1 ? currentDate.month : "- -"}
              </span>{" "}
              months
            </p>
            <p>
              <span className="text-[hsl(259_100%_65%)]">
                {currentDate.day !== -1 ? currentDate.day : "- -"}
              </span>{" "}
              days
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AgeCalculator;
