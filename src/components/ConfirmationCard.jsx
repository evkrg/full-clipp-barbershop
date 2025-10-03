import { Scissors, User, Calendar, MapPin, NotebookText } from "lucide-react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Button from "./Button";

const DetailItem = ({ icon, label, children }) => (
  <div className="flex w-full items-start gap-4">
    <div className="flex-shrink-0 text-slate-400">
      {React.createElement(icon, { className: "h-5 w-5", "aria-hidden": "true" })}
    </div>
    <div className="flex flex-col">
      <dt className="text-sm font-medium text-slate-500">{label}</dt>
      <dd className="mt-1 text-lg font-semibold text-slate-800">{children}</dd>
    </div>
  </div>
);

const formatBookingTime = (startISO, endISO) => {
  if (!startISO || !endISO) return <span>—</span>;
  const start = new Date(startISO);
  const end = new Date(endISO);
  const locale = "el-GR";
  const weekday = start.toLocaleDateString(locale, { weekday: "long" });
  const dayMonth = start.toLocaleDateString(locale, { day: "numeric", month: "long" });
  const datePart = `${weekday}, ${dayMonth}`;
  const timePart = `${start.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", hour12: false })} – ${end.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", hour12: false })}`;
  return (
    <>
      <span className="block">{datePart}</span>
      <span className="block text-base font-medium text-slate-500">{timePart}</span>
    </>
  );
};

export default function ConfirmationCard({ data }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-8 text-center">
        <CheckCircleIcon className="h-16 w-16 text-emerald-500" aria-hidden="true" />
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 whitespace-nowrap">Το ραντεβού έκλεισε!</h1>
          <p className="text-slate-600">Ευχαριστούμε! Σε περιμένουμε.</p>
        </div>
      </div>

      <div className="p-8">
        <dl className="grid gap-6 mx-auto max-w-md">
          <DetailItem icon={Scissors} label="Service">{data?.title}</DetailItem>
          <DetailItem icon={Calendar} label="When">{formatBookingTime(data?.startTime, data?.endTime)}</DetailItem>
          <DetailItem icon={User} label="For">{data?.name}</DetailItem>
          <DetailItem icon={MapPin} label="Where">Δροσοπούλου 6, Αθήνα</DetailItem>
          {data?.notes && <DetailItem icon={NotebookText} label="Your Notes">{data.notes}</DetailItem>}
        </dl>
      </div>

      <div className="border-t border-slate-200 px-8 py-6 text-center">
        <Button href={`https://cal.com/booking/${data.uid}`} target="_blank" rel="noreferrer">
          Διαχείριση ραντεβού
        </Button>
      </div>
    </div>
  );
}
