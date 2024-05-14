import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import locationIcon from '../../public/images/location.webp';
const customIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [60, 60],
  });
  const position = [23.8103 , 90.4125];
const ContactUs = () => {
    return (
        <div>
        <h2 className="text-3xl text-center font-poppins font-bold mt-16">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 mt-16 border-2 rounded-lg p-6 gap-5">
        <div >
        <MapContainer className="h-[500px]" center={position} zoom={15} scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker icon={customIcon} position={position}>
                            <Popup>
                                Dhaka
                            </Popup>
                        </Marker>
                    </MapContainer>
        </div>
        <div className="text-center bg-[#F1F1F1] p-8 rounded-lg">
            <h2 className="text-3xl text-center font-poppins font-bold text-[#3A4256] mb-6">Get In Touch</h2>
            <p className="text-xl text-center font-poppins font-medium text-[#3A4256] mb-6">We are always ready to help you. Feel free to contact us anytime.</p>
            <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" /><br />
            <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs mt-5" /><br />
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-5" /><br />
            <input type="text" placeholder="Message" className="input input-bordered w-full max-w-xs mt-5" /><br />
            <button className="btn btn-primary w-full max-w-xs mt-5">Submit</button>
        </div>
    </div>
    </div>
    );
};

export default ContactUs;