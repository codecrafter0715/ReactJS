import React, { useEffect, useState } from 'react';

const FetchProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    // Fetch API data
    const fetchAPI = async () => {
        try {
            const response = await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects');
            const data = await response.json();
            console.log("Fetched Data:", data);  // ✅ Debugging: Log API response
            setProjects(data);
        } catch (err) {
            console.error("Error fetching projects:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    if (loading) {
        return <h2 className="text-center">Loading projects...</h2>;
    }

    return (
        <>
            <h1 className="text-center">Project List</h1>

            <div className="container" style={{ overflowY: "scroll", height: "500px" }}>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Details</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length > 0 ? (
                            projects.map((p, index) => (
                                <tr key={index}>
                                    <th scope="row">{p.id}</th>
                                    <td>{p.ProjectName || "N/A"}</td>
                                    <td>{p.Details || "N/A"}</td>
                                    <td>{p.priority || "N/A"}</td>
                                    <td>{p.Department || "N/A"}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No projects found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FetchProjects;
