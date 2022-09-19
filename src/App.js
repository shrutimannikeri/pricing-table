

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCheck } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <PriceCart />
    </div>
  );
}
const PriceCart=()=>{
  return(
    <div className='price-container'>
    <section className="py-5">
	<div className="container">
		<div className="row">
			<div className="col-lg-4">
				<div className="card  mb-5 mb-lg-0 rounded-lg">
					<div className="card-header">
						<h5 className="card-title text-black-50 text-uppercase text-center">Free</h5>
						<h6 className="h1 text-black text-center">$0<span className="h6 text-black-50">/month</span></h6>
					</div>
					<div className="card-body bg-light rounded-bottom">
						<ul className="list-unstyled mb-4">
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Single User</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>5GB Storage</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
							<li className="text-muted mb-3"><span className="mr-3"><FontAwesomeIcon icon={faXmark} /></span>Unlimited Private Projects</li>
							<li className="text-muted mb-3"><span className="mr-3"><FontAwesomeIcon icon={faXmark} /></span>Dedicated Phone Support</li>
							<li className="text-muted mb-3"><span className="mr-3"><FontAwesomeIcon icon={faXmark} /></span>Free Subdomain</li>
							<li className="text-muted mb-3"><span className="mr-3"><FontAwesomeIcon icon={faXmark} /></span>Monthly Status Reports</li>
						</ul>
						<button className="btn py-3">BUTTON</button>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="card  mb-5 mb-lg-0 rounded-lg">
					<div className="card-header">
						<h5 className="card-title text-black-50 text-uppercase text-center">Plus</h5>
						<h6 className="h1 text-black text-center">$9<span className="h6 text-black-50">/month</span></h6>
					</div>
					<div className="card-body bg-light rounded-bottom">
						<ul className="list-unstyled mb-4">
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span><strong>5 Users</strong></li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>50GB Storage</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Private Projects</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Free Subdomain</li>
							<li className="text-muted mb-3"><span className="mr-3"><FontAwesomeIcon icon={faXmark} /></span>Monthly Status Reports</li>
						</ul>
						<button className="btn py-3">BUTTON</button>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="card  mb-5 mb-lg-0 rounded-lg">
					<div className="card-header">
						<h5 className="card-title text-black-50 text-uppercase text-center">Pro</h5>
						<h6 className="h1 text-black text-center">$49<span className="h6 text-black-50">/month</span></h6>
					</div>
					<div className="card-body bg-light rounded-bottom">
						<ul className="list-unstyled mb-4">
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span><strong>Unlimited Users</strong></li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>150GB Storage</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Private Projects</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span><strong>Unlimited</strong> Free Subdomains</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Monthly Status Reports</li>
						</ul>
						<button className="btn py-3">BUTTON</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}
export default App;
