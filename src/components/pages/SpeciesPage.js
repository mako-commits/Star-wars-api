import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Spinner from '../Spinner'
export default function SpeciesPage({ result_specie, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
      <>
        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Species</MDBBreadcrumbItem>
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
                <h4 className="h4-responsive text-white">Species Tables</h4>
              </MDBView>
              <MDBCardBody>
                <MDBTable striped responsive>
                  <MDBTableHead>
                    <tr>
                      <th>Name</th>
                      <th>Classification</th>
                      <th>Designation</th>
                      <th>Average Height</th>
                      <th>Average Lifespan</th>
                      <th>Eye Color</th>
                      <th>Hair Color</th>
                      <th>Skin Color</th>
                      <th>Language</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {result_specie.map((specie, i) => {
                      return (
                        <tr key={i}>
                          <td>{specie.name}</td>
                          <td>{specie.classification}</td>
                          <td>{specie.designation}</td>
                          <td>{specie.average_height}</td>
                          <td>{specie.average_lifespan}</td>
                          <td>{specie.eye_colors}</td>
                          <td>{specie.hair_colors}</td>
                          <td>{specie.skin_colors}</td>
                          <td>{specie.language}</td>

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
