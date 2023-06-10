import { useState } from "react";
import { useRouter } from "next/router";

import { Table } from '@nextui-org/react';

function EventList({ eventlist }) {
    const [events, setEvents] = useState(eventlist);
    const router = useRouter();

    const fetchSportsEvents = async () => {
        const response = await fetch(`http://localhost:4000/events?category=sports`);
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined, { shallow: true });
    };

    return (
        <>
            <div class="container">
                <button class="btn btn-primary" onClick={fetchSportsEvents}>Sports Events</button>
                <br />
                <br />
                <h1>List of Events</h1>
                <br />
                <br />
                {/* {
                    events.map(event => {
                        return (
                            <div key={event.id}>
                                <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                                <p>{event.description}</p>
                                <hr />
                            </div>
                        )
                    })
                } */}
                <Table class="table table-striped table-responsive">
                    <Table.Header>
                        <Table.Column>Details</Table.Column>
                    </Table.Header>
                    <Table.Body items={events} >
                        {events.map((item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell class="overflow-auto">
                                    <h2>{item.id} {item.title} {item.date} | {item.category}</h2>
                                    <p class="text-container" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { query } = context;
    const { category } = query;
    const queryString = category ? 'category=sports' : '';

    const response = await fetch(`http:/localhost:4000/events?${queryString}`);
    const data = await response.json();

    return {
        props: {
            eventlist: data
        }
    }
}

export default EventList;