import React from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Spinner from '../Spinner'
export default function PeoplesPage({ result_people, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (

      <>
        <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>People</MDBBreadcrumbItem>
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
                <h4 className="h4-responsive text-white">Peoples Tables</h4>
              </MDBView>
              <MDBCardBody>
                <MDBTable striped responsive>
                  <MDBTableHead>
                    <tr>
                      <th>Name</th>
                      <th>Birth Year</th>
                      <th>Eye Color</th>
                      <th>Gender</th>
                      <th>Hair Color</th>
                      <th>Height</th>
                      <th>Mass</th>
                      <th>Skin Color</th>

                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {result_people.map((people, i) => {
                      return (
                        <tr key={i}>
                          <td>{people.name}</td>
                          <td>{people.birth_year}</td>
                          <td>{people.eye_color}</td>
                          <td>{people.gender}</td>
                          <td>{people.hair_color}</td>
                          <td>{people.height}</td>
                          <td>{people.mass}</td>
                          <td>{people.skin_color}</td>

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
