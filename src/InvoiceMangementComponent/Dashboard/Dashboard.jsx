import React from 'react'

const Dashboard = () => {
    const routing = useRoutes(Themeroutes);

    return <div className="dark">{routing}</div>;
}

export default Dashboard