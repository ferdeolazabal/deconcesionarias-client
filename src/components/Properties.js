import { useSelector } from "react-redux";
import Content from "./Content";
import { TabPanel } from "./TabPanel";

export const Properties = ( { property } ) => {

    // @ts-ignore
    const { getVehicleProperty } = useSelector( state => state.property.properties );


    return (
        <div className="property-div">
            <div className="">

                <TabPanel value={ property } index={ property }>
                    {
                        getVehicleProperty && getVehicleProperty
                            .filter( i => i.property_category_FK === property + 1 )
                            .map( property => 
                                    (
                                        <div
                                            className=""
                                        >

                                        <Content 
                                            id={property.id}
                                            name={property.name}
                                            value={property.value}
                                        />
                                        </div>
                                    )
                                )
                    }
                </TabPanel>

                <div className="fixed-bottom">
                    < div className="d-grid gap-2 col-5 mx-auto">
                        
                        <button className="mb-5 btn btn-lg btn-block btn-primary">
                            Submit
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )



};