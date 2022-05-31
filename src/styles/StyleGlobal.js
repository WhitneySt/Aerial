import styled from 'styled-components'


export const StylesFondo = styled.div`
    background: linear-gradient(180deg, #2C3329 0%, #4D4D4D 100%, #424D3D 100%);
    margin:0;
    padding: 70px 100px 0;
    box-sizing: border-box;
`
export const StylesNavbar = styled.nav`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`
export const StylesDiv1 = styled.div`
    background-color: #F0EFE9;
    display: flex;
    flex-direction: column;
    padding: 40px 70px; 
`
export const StylesLogo = styled.img`
    width: 100px;
    height: 30px;
`
export const StylesDivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`
export const StylesDivHero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    z-index: 2;
    @media screen and (max-width: 1170px) {
        flex-direction: column;
    }
`

export const StylesDivFlex2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`

export const StylesUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    font-size: 16px;

    @media screen and (max-width: 1068px) {
        display: none;
    }
`
export const StylesBtn1 = styled.button`
    padding: 11px 16px;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    font-family: Helvetica;
    font-size: 14px;

`
export const StylesBtn2 = styled.button`
    padding: 11px 16px;
    background-color: #24B26B;
    border: none;
    border-radius: 4px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
    @media screen and (max-width: 648px) {
        display: none;
    }
`
export const StylesimgFondo = styled.img`
    position: absolute;
    width: 873px;
    height: 696px;
    left: 44.25%;
    top: 215px;
    clip-path: inset(0 170px 182px 0);
    @media screen and (max-width: 1439px) {
        display: none;
    }    
`
export const Stylesh1 = styled.h1`
    font-weight: 700;
    font-size: 56px;
    color: #333333;
`
export const StylesDivBtns = styled.div`
    display:flex;
    align-items: center;
    gap: 8px;
`
export const StylesDivCards = styled.div`
    display:flex;
    gap: 16px;
    flex-wrap: wrap;
    width: 120%;
    margin: 32px 0;
    justify-content: space-around;
    align-items: center;
`
export const StylespInfo = styled.p`
    font-weight: 300;
    font-size: 16px;
    text-align: justify;
    color: #333333;
`
export const StylesCard = styled.div`
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 16px 16px;
    border-radius: 5px;
    width: 144px;
    
    
    img{
        width: 80px;
        height: 80px;
    }
    h2{
        font-size: 14px;
        color: #333333;
        margin-bottom: 4px;
    }
    span{
        font-size: 12px;
        font-weight: 300;
        color: #333333;
    }
    p{
        font-size: 12px;
        font-weight: 300;
        color: #666666;
        margin-bottom: 0;
    }
`
export const StylesDiv2 = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 40px 60px 0; 
`

export const StylesDivCom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    @media screen and (max-width: 710px) {
        flex-direction: column;
        align-items: center;
        span{
            width: 50%;
        }
    }
    span{
        font-size: 16px;
        color: #666666;
        width: 18%;
        @media screen and (max-width: 710px) {        
            width: 60%;
            margin-bottom: 20px;
            text-align: center;
        }
    }
    img{
        width: 75%;
        object-fit: contain;
        @media screen and (max-width: 710px) {        
            width: 100%;
        }
    }
`

export const StylesSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    margin-top: 46px;
    text-align: center;
    h2{
       font-size: 32px; 
       color: #333333;
       margin: 10px 0;
    }
    p{
      font-size: 16px;
      color: #666666;
      text-align: center;
      margin: 0 0  24px;
    }
    form{
        display: flex;
        gap: 8px;
        @media screen and (max-width: 710px) {
            flex-direction:column;
            align-items: center;
        }
        input{
            width: 302px;
            border: 1px solid #CCCCCC;
            border-radius: 4px;
            background-color: #FFFFFF;
            padding: 11px 40px;
            &::placeholder{
                font-family: 'Helvetica';
                font-weight: 300;
                font-size: 16px;
                color: #999999;
                background-image: url('https://i.ibb.co/pJw8FBm/Vector-Search.png');
                background-repeat: no-repeat;
                background-position: 5% center;
                background-size: 16.6px;
            }
        }
        button{
           width: 90px;
           height:40px;
           padding: 9px 21px 9px 20px;
           background-color: #333333;
           border: none;
           border-radius: 4px;
           color: #FFFFFF;
           font-size: 16px;
        }
    }
`
export const StylesFooter = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap:16px;
    margin-top:40px;

`
export const StylesFCard = styled.div`
    width:220px;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.04);
    background-color: #FFFFFF;
    display: flex;
    padding: 24px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 8px 8px 0 0;
    p{
        font-size: 16px;
        text-align:center;
        color: #333333;
        margin:0;   
    }
    div{
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        span{
          font-size: 12px;
          color: #666666;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3px;

        }
    }

`
