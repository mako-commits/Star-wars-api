import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Spinner from '../Spinner'
export default function PlanetsPage({ result, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
      <>
        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Planets</MDBBreadcrumbItem>
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
                <h4 className="h4-responsive text-white">Planets tables</h4>
              </MDBView>
              <MDBCardBody>
                {/* <h3 className="mt-5 text-left"><strong>Striped rows.</strong></h3>
              <p>Use prop striped to add zebra-striping to any table row within the table body</p> */}
                <MDBTable striped responsive>
                  <MDBTableHead>
                    <tr>
                      <th>Name</th>
                      <th>Diameter</th>
                      <th>Rotation Period</th>
                      <th>Orbital Period</th>
                      <th>Gravity</th>
                      <th>Population</th>
                      <th>Climate</th>
                      <th>Surface Water</th>
                      <th>Terrain</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {result.map((planet, i) => {
                      return (
                        <tr key={i}>
                          <td>{planet.name}</td>
                          <td>{planet.diameter}</td>
                          <td>{planet.rotation_period}</td>
                          <td>{planet.orbital_period}</td>
                          <td>{planet.gravity}</td>
                          <td>{planet.population}</td>
                          <td>{planet.climate}</td>
                          <td>{planet.surface_water}</td>
                          <td>{planet.terrain}</td>
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

