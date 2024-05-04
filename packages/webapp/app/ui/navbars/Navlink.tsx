import { NavLink } from "@remix-run/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavbarOption } from "./types";
import classNames from "classnames";

const getKey = (option: NavbarOption): string => {
  return option.to ?? option.label;
};

export function renderNavlink(option: NavbarOption) {
  return (
    <NavLink
      key={getKey(option)}
      to={option.to!}
      className={({ isActive, isPending }) =>
        classNames("font-medium sm:py-6", {
          "text-blue-600 dark:text-blue-500": isActive,
          "text-red-600 dark:text-red-500": isPending,
          "text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500":
            !isActive,
        })
      }
    >
      {option.label}
    </NavLink>
  );
}

export function renderNthLevelDropdown(option: NavbarOption) {
  return (
    <div
      key={getKey(option)}
      className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]"
    >
      <button
        type="button"
        className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        {option.label}
        <ChevronDownIcon className="flex-shrink-0 ms-2 w-4 h-4" />
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
        {option.options?.map((it) => (
          <NavLink
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            to={it.to!}
            key={getKey(it)}
          >
            {it.label}
          </NavLink>
        )) ?? null}
      </div>
    </div>
  );
}

export function renderFirstLevelDropdown(option: NavbarOption) {
  return (
    <div
      key={getKey(option)}
      className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-5"
    >
      <button
        type="button"
        className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
      >
        {option.label}
        <ChevronDownIcon className="flex-shrink-0 ms-2 w-4 h-4" />
      </button>
      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
        {option.options?.map((it) => {
          return it.to ? (
            <NavLink
              key={getKey(it)}
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to={it.to}
            >
              {it.label}
            </NavLink>
          ) : (
            renderNthLevelDropdown(it)
          );
        }) ?? null}
      </div>
    </div>
  );
}

export function renderNavLinks(options: NavbarOption[]) {
  return options.map((it) => {
    if (it.to) return renderNavlink(it);
    else return renderFirstLevelDropdown(it);
  });
}
