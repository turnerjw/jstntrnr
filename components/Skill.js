import styled from "styled-components";

const Skill = styled.div`
    text-align: center;
    padding: 0 1rem;
    margin: 2.5rem 0;
    //max-width: 40rem;
    h2 {
        background: ${({ theme }) => theme.fg};
        color: ${({ theme }) => theme.bg};
        padding: 1rem;
        margin: 0;
    }
    h3 {
        border: 2px solid ${({ theme }) => theme.fg};
        padding: 1rem;
        margin: 0;
    }
`;

const Skillz = () => (
    <SkillStyle>
        <h2>Web Technologies</h2>
        <h3>
            HTML / Javascript / CSS
            <br />
            React / Next.js / Angular
            <br />
            REST / GraphQL
        </h3>
    </SkillStyle>
);

export default Skill;
