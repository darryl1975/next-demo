import useSWR from 'swr';

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
};

function DashboardSWR() {
    // useSWR('dashboard', async () => {
    //     const response = await fetch('http://localhost:4000/dashboard');
    //     const data = await response.json();
    //     return data;
    // })

    const { data, error } = useSWR('dashboard', fetcher);

    if (error) return 'An error has occured';
    if (!data) return 'Loading';

    return (
        <>
            <h1>Dashboard</h1>
            <br />
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </>
    )
}

export default DashboardSWR;