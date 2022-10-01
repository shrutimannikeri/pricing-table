
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCheck } from '@fortawesome/free-solid-svg-icons'
import {PRICE_DATA} from './PRICE_DATA'
function App() {
  return (
    <div className="App">
      <PriceList />
    </div>
  );
}
const PriceList=()=>{
	const princeInfo=PRICE_DATA
	return(
<div className='price-container'>
    <section className="py-5">
	<div className="container">
		<div className="row">		{
			princeInfo.map((priceItem,ind)=>(
				<PriceCart priceItem={priceItem} key={ind}/>
			))
		}
		</div>
		</div>
		</section>
		</div>
	)
}
const PriceCart=({priceItem})=>{
	
  return(
    
			<div className="col-lg-4">
				<div className="card  mb-5 mb-lg-0 rounded-lg">
					<div className="card-header">
						<h5 className="card-title text-black-50 text-uppercase text-center">{priceItem.name}</h5>
						<h6 className="h1 text-black text-center">{priceItem.amount_month}<span className="h6 text-black-50">/month</span></h6>
					</div>
					<div className="card-body bg-light rounded-bottom">
						<ul className="list-unstyled mb-4">
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>{priceItem.user}</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>{priceItem.storage}</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>{priceItem.Projects}</li>
							<li className="mb-3"><span className="mr-3"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
							<li className="text-muted mb-3"><span className="mr-3">{priceItem.private_projects===false ? <FontAwesomeIcon icon={faXmark}  /> : <FontAwesomeIcon icon={faCheck} />}</span>Unlimited Private Projects</li>
							<li className="text-muted mb-3"><span className="mr-3">{priceItem.phone_suport===false ? <FontAwesomeIcon icon={faXmark}  /> : <FontAwesomeIcon icon={faCheck} />}</span>Dedicated Phone Support</li>
							<li className="text-muted mb-3"><span className="mr-3">{priceItem.free_subdomain===false ? <FontAwesomeIcon icon={faXmark}  /> : <FontAwesomeIcon icon={faCheck} />}</span>Free Subdomain</li>
							<li className="text-muted mb-3"><span className="mr-3">{priceItem.report===false ? <FontAwesomeIcon icon={faXmark}  /> : <FontAwesomeIcon icon={faCheck} />}</span>Monthly Status Reports</li>
						</ul>
						<button className="btn py-3">BUTTON</button>
					</div>
				</div>
			</div>
			
  )
}
export default App;
