import React, { useEffect, useState } from 'react';

// Today's date as dd-mm-yyyy, the reader's own — "as of today (08-10-2026)" in the Principles. Set in the browser,
// not at build time: the built page would otherwise carry the day of the last docs build.
export default function Today() {
  const [date, setDate] = useState('');
  useEffect(() => {
    const d = new Date();
    setDate(String(d.getDate()).padStart(2, '0') + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + d.getFullYear());
  }, []);
  return <span>{date}</span>;
}
