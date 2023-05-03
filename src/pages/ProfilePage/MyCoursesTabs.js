import React from 'react'
import { Alert, Tab, Tabs } from 'react-bootstrap'

function MyCoursesTabs() {
    return (
        <Tabs
            defaultActiveKey="all"
            id="fill-tab-example"
            className="mb-3 mt-4"
            fill
        >
            <Tab eventKey="all" title="All">
                <Alert key={"danger"} variant={"danger"}>
                    No Courses Found...
                </Alert>
            </Tab>
            <Tab eventKey="inprogress" title="In Progress">
                <Alert key={"danger"} variant={"danger"}>
                    No Courses Found...
                </Alert>
            </Tab>
            <Tab eventKey="finished" title="Finished">
                <Alert key={"danger"} variant={"danger"}>
                    No Courses Found...
                </Alert>
            </Tab>
            <Tab eventKey="passed" title="Passed">
                <Alert key={"danger"} variant={"danger"}>
                    No Courses Found...
                </Alert>
            </Tab>
            <Tab eventKey="failed" title="Failed">
                <Alert key={"danger"} variant={"danger"}>
                    No Courses Found...
                </Alert>
            </Tab>
        </Tabs>
    )
}

export default MyCoursesTabs