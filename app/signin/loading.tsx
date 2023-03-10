import React,{CSSProperties} from 'react'
import { SyncLoader } from 'react-spinners';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

type Props = {}

export default function loading({}: Props) {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SyncLoader
        color={"gray"}
        cssOverride={override}
        size={13}
        speedMultiplier={1.2}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}