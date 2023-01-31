import React from "react"

const CustomFooter = () => <footer className="page-footer font-small pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Epibooks</h5>
                <p>You can find awesome books here!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Fantasy</a></li>
                    <li><a href="#!">History</a></li>
                    <li><a href="#!">Romance</a></li>
                
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">All books</a></li>
                    <li><a href="#!">Address</a></li>
                
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright Epibooks:
    </div>

</footer>

export default CustomFooter