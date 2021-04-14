import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Spinner from '../Spinner'
export default function VehiclesPage({ result_vehicle, isLoading }) {
    return isLoading ? (
        <Spinner />
    ) : (
            <>
                <MDBCard className="mb-5">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>Vehicle</MDBBreadcrumbItem>
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
                                <h4 className="h4-responsive text-white">Vehicles Tables</h4>
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
                                        {result_vehicle.map((vehicle, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{vehicle.name}</td>
                                                    <td>{vehicle.cargo_capacity}</td>
                                                    <td>{vehicle.cost_in_credits}</td>
                                                    <td>{vehicle.crew}</td>
                                                    <td>{vehicle.length}</td>
                                                    <td>{vehicle.manufacturer}</td>
                                                    <td>{vehicle.max_atmosphering_speed}</td>
                                                    <td>{vehicle.model}</td>
                                                    <td>{vehicle.passengers}</td>
                                                    <td>{vehicle.vehicle_class}</td>
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

