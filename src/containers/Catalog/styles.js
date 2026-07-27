import styled from 'styled-components';

export const Background = styled.section`
    min-height: 100vh;
    padding: 115px clamp(1rem, 5vw, 4rem) 3rem;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .85)), url(${props => props.$image}) center / cover no-repeat;
`;

export const Hero = styled.div`
    width: min(100%, 1500px);
    min-height: calc(100vh - 150px);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(2rem, 7vw, 7rem);

    @media (max-width: 768px){
        min-height: auto;
        flex-direction: column-reverse;
        text-align: center;
    }
`;

export const Content = styled.div`
    width: min(100%, 720px);
    color: white;

    .eyebrow{ margin: 0; color: #65d96d; font-weight: 700; }
    h1{ margin-top: .5rem; font-size: clamp(2.25rem, 6vw, 4rem); }
    > p:not(.eyebrow){ margin-top: 1.5rem; font-size: clamp(1rem, 2.2vw, 1.5rem); line-height: 1.5; }
`;

export const Poster = styled.div`
    img{ width: min(32vw, 360px); max-height: 500px; border-radius: 16px; object-fit: cover; box-shadow: 0 8px 30px rgba(0,0,0,.4); }
    @media (max-width: 768px){ img{ width: min(55vw, 280px); max-height: 380px; } }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    @media (max-width: 768px){ justify-content: center; }
    @media (max-width: 420px){ flex-direction: column; align-items: center; button{ width: min(100%, 280px); } }
`;

export const Carrousels = styled.section`
    padding: .5rem clamp(.25rem, 2vw, 1.5rem) 2rem;
`;
