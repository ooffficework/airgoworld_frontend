type Props = {
  data: string;
  track: number;
};

export default function HotelPolicyCard({ data, track }: Props) {
  return (
    <div className="grid p-5 rounded-md shadow-md grid-cols-[300px_1fr] ">
      <div className="">
        <p className="font-semibold text-nowrap">{data}</p>
      </div>
      <div className="">
        {track === 0 && (
          <p>
            From <b>02:00:00</b> To <b>02:00:00</b>
          </p>
        )}
        {track === 1 && (
          <p>
            The guest checking in must be at least <b>18</b> years old.
          </p>
        )}
        {track === 2 && (
          <p>
            For security purposes, it is mandatory to show a valid passport or
            state-issued photo ID at check-in. This hotel can arrange a visa for
            you after your reservation is made. Please contact them via phone or
            email (details provided in your confirmation). Please present the
            credit card used to make this reservation upon check-in at the
            hotel. If you are booking on behalf of someone else, you must
            contact the hotel directly to arrange for third party billing.
            Please note that there is an additional 15 AED tourism fee per
            bedroom per unit per night payable at the hotel directly Please note
            that Antique bazaar will be closed for lunch and dinner from 4 - 7
            June, 2025. Operations will resume from 8 June, 2025 onwards.
          </p>
        )}
        {track === 3 && (
          <p>
            For security purposes, it is mandatory to show a valid passport or
            state-issued photo ID at check-in. This hotel can arrange a visa for
            you after your reservation is made. Please contact them via phone or
            email (details provided in your confirmation). Please present the
            credit card used to make this reservation upon check-in at the
            hotel. If you are booking on behalf of someone else, you must
            contact the hotel directly to arrange for third party billing.
            Please note that there is an additional 15 AED tourism fee per
            bedroom per unit per night payable at the hotel directly Please note
            that Antique bazaar will be closed for lunch and dinner from 4 - 7
            June, 2025. Operations will resume from 8 June, 2025 onwards.
          </p>
        )}
      </div>
    </div>
  );
}
