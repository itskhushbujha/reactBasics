import React from "react";

function Card() {
  return (
    <>
      <div class="w-[19.875rem] rounded-lg bg-white text-[0.8125rem]/5 text-slate-900 ring-1 shadow-xl shadow-black/5 ring-slate-700/10">
        <div class="flex items-center p-4 pb-0">
          <div class="ml-4 flex-auto">
            <div class="font-medium">Emily Selman</div>
            <div class="mt-1 text-slate-500">
              Sent you an invite to connect.
            </div>
          </div>
        </div>
        <div class="flex gap-3 p-4">
          <div class="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem]/5 font-semibold text-white hover:bg-indigo-500">
            Accept
          </div>
          <div class="pointer-events-auto rounded-md px-4 py-2 text-center font-medium ring-1 shadow-xs ring-slate-700/10 hover:bg-slate-50">
            Decline
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
