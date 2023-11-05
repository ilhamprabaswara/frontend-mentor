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
    day: 0,
    month: 0,
    year: 0,
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    const day = e.target.dayInput.value;
    const month = e.target.monthInput.value;
    const year = e.target.yearInput.value;
    const inputDate = new Date(year, month - 1, day);
    const todayDate = new Date();
    let years = todayDate.getFullYear() - inputDate.getFullYear();
    let months = todayDate.getMonth() - inputDate.getMonth();
    let days = todayDate.getDate() - inputDate.getDate();
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
                <span className="mb-[5px] xl:mb-[9px]">Date:</span>
                <input
                  className="no-spinner h-[52px] w-[86px] rounded-[5px] border border-[hsl(0_0%_86%)] px-[15px] text-[20px] focus:outline-[hsl(259_100%_65%)] xl:h-[70px] xl:w-[158px] xl:px-6 xl:text-[32px]"
                  type="number"
                  name="dayInput"
                  id="dayInput"
                />
              </label>
              <label
                className="flex flex-col text-[12px] font-semibold uppercase xl:text-[14px]"
                htmlFor="monthInput"
              >
                <span className="mb-[5px] xl:mb-[9px]">Month:</span>
                <input
                  className="no-spinner h-[52px] w-[86px] rounded-[5px] border border-[hsl(0_0%_86%)] px-[15px] text-[20px] focus:outline-[hsl(259_100%_65%)] xl:h-[70px] xl:w-[158px] xl:px-6 xl:text-[32px]"
                  type="number"
                  name="monthInput"
                  id="monthInput"
                />
              </label>
              <label
                className="flex flex-col text-[12px] font-semibold uppercase xl:text-[14px]"
                htmlFor="yearInput"
              >
                <span className="mb-[5px] xl:mb-[9px]">Year:</span>
                <input
                  className="no-spinner h-[52px] w-[86px] rounded-[5px] border border-[hsl(0_0%_86%)] px-[15px] text-[20px] focus:outline-[hsl(259_100%_65%)] xl:h-[70px] xl:w-[158px] xl:px-6 xl:text-[32px]"
                  type="number"
                  name="yearInput"
                  id="yearInput"
                />
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
                {currentDate.year || "- -"}
              </span>{" "}
              years
            </p>
            <p>
              <span className="text-[hsl(259_100%_65%)]">
                {currentDate.month || "- -"}
              </span>{" "}
              months
            </p>
            <p>
              <span className="text-[hsl(259_100%_65%)]">
                {currentDate.day || "- -"}
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
