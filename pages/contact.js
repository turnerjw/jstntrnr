import ContactForm from "../components/ContactForm";
import GridContainer from "../components/GridContainer";
import GridRow from "../components/GridRow";
import GridItem from "../components/GridItem";
import Footer from "../components/Footer";

const Contact = () => (
    <GridContainer columns="repeat(12, 1fr)" rows="auto">
        <GridRow rows="1">
            <GridItem columns="2 / 12">
                <ContactForm />
            </GridItem>
        </GridRow>
        <GridRow rows="10">
            <GridItem columns="2 / 12">
                <Footer />
            </GridItem>
        </GridRow>
    </GridContainer>
);

export default Contact;
