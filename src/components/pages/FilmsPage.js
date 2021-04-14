import React from 'react';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import MapSection from './sections/MapSection';
import ModalSection from './sections/ModalSection';
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import Spinner from '../Spinner'
export default function FilmsPage({ result_film, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
      <>
        {/* <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Films</MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBFormInline className="md-form m-0">
              <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search" />
              <MDBBtn size="sm" color="yellow" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
            </MDBFormInline>
          </MDBCardBody>
        </MDBCard> */}
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header yellow darken-2">
                <h4 className="h4-responsive text-white">Films Tables</h4>
              </MDBView>
              <MDBCardBody>
                <MDBTable striped responsive>
                  <MDBTableHead>
                    <tr>
                      <th>Title</th>
                      <th>Episode</th>
                      <th>Opening Crawl</th>
                      <th>Director</th>
                      <th>Released Date</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {result_film.map((film, i) => {
                      return (
                        <tr key={i}>
                          <td>{film.title}</td>
                          <td>{film.episode_id}</td>
                          <td>{film.opening_crawl}</td>
                          <td>{film.director}</td>
                          <td>{film.release_date}</td>
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


// const FilmsPage = () => {
//   return (
//     <React.Fragment>
//       <BreadcrumSection />



//     </React.Fragment>
//   )
// }

// export default FilmsPage;