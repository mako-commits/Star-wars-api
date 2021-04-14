import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Spinner from '../Spinner'
export default function StarshipsPage({ result_starship, isLoading }) {
    return isLoading ? (
        <Spinner />
    ) : (
            <>
                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>Starships</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                        <MDBFormInline className="md-form m-0">
                            <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search" />
                            <MDBBtn size="sm" color="yellow" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
                        </MDBFormInline>
                    </MDBCardBody>
                </MDBCard>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBCard className="mt-5">
                            <MDBView className="gradient-card-header yellow darken-2">
                                <h4 className="h4-responsive text-white">Starships Tables</h4>
                            </MDBView>
                            <MDBCardBody>
                                <MDBTable striped responsive>
                                    <MDBTableHead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Cargo Capacity</th>
                                            <th>Cost in Credit</th>
                                            <th>Crew</th>
                                            <th>Length</th>
                                            <th>Manufacturer</th>
                                            <th>Max Atmosphering Speed</th>
                                            <th>Model</th>
                                            <th>Passenger</th>
                                            <th>Vehicle Class</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {result_starship.map((starship, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{starship.name}</td>
                                                    <td>{starship.model}</td>
                                                    <td>{starship.starship_class}</td>
                                                    <td>{starship.manufacturer}</td>
                                                    <td>{starship.cost_in_credits}</td>
                                                    <td>{starship.length}</td>
                                                    <td>{starship.crew}</td>
                                                    <td>{starship.passengers}</td>
                                                    <td>{starship.max_atmosphering_speed}</td>
                                                    <td>{starship.hyperdrive_rating}</td>
                                                    <td>{starship.MGLT}</td>
                                                    <td>{starship.cargo_capacity}</td>
                                                    <td>{starship.consumables}</td>
                                                </tr>
                                            )
                                        })}
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </>
        )
}

