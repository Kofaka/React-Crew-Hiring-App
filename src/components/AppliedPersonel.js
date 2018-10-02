import React from "react";

const AppliedPersonel = ({data}) => (
    <section>
        <h3>{data.name.first} {data.name.last}</h3>
    </section>
);

export default AppliedPersonel;