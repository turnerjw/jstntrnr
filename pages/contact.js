import ContactForm from "../components/ContactForm";
import GridContainer from "../components/GridContainer";
import GridRow from "../components/GridRow";
import GridItem from "../components/GridItem";
import Footer from "../components/Footer";

const Contact = () => (
    <GridContainer columns="repeat(12, 1fr)" rows="1fr auto auto auto 1fr auto">
        <GridRow rows="1">
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="2">
                <h2>Contact</h2>
            </GridItem>
            <GridItem columns="2 / 5" smallColumns="2 / 12" rows="3">
                <h3>Say hi!</h3>
            </GridItem>
            <GridItem columns="2 / 12" rows="4">
                <ContactForm />
            </GridItem>
        </GridRow>
        <GridRow rows="6">
            <GridItem columns="2 / 12">
                <Footer />
            </GridItem>
        </GridRow>
    </GridContainer>
);

export default Contact;
