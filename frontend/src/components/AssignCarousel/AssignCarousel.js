import { useEffect, useState } from "react";
import axios from '../../axios/axiosInstance';

import Heading from '../Heading/Heading';


import Form from '../Form/Form';
import Select from '../Select/Select';
import Button from "../Button/Button";

const AssignCarousel = props => {
    let carousels = [];
    const airline = props.flight.name;
    const city = localStorage.getItem('city');

    const [displayForm, setDisplayForm] = useState(true);
    
    const [availableCarousel, setAvailableCarousel] = useState([]);
    const [assignedCarousel, setAssignedCarousel] = useState([]);

    const onFormSubmitHandler = event => {
        event.preventDefault();
    
        console.log(event.target[0].value);
        axios.post(`/assignbaggagecarousel/${props.flight._id}/${event.target[0].value}`)
        .then(response => {
            if(response.status === 200) {
                setDisplayForm(false);
            }
            else {
                
            }
            
        });
        
    };

    useEffect(() => {
        axios.get(`/schedule/assignedairlinecarousel/${airline}`)
        .then(response => {
            setAssignedCarousel(response.data.assignedCarousel);
        })

        axios.get(`/terminalgates/${city}`)
        .then(response => {
            setAvailableCarousel(response.data[0].carousel);
        })
    }, [airline]);

    carousels = availableCarousel.concat(assignedCarousel);
    
    return (
        <>
            {!props.flight.baggage_carousel && displayForm && 
                <div>
                    <Heading header="1" heading="Assign Carousel" />

                    <Form id="add-carousel-form" onSubmit={onFormSubmitHandler}>
                        <Select label="Select Carousel" name="baggage_carousel" required={true} options={carousels} />
                        <Button type="submit"> Assign Carousel </Button>
                    </Form>
                </div>
            }
        </>
    )
};

export default AssignCarousel;