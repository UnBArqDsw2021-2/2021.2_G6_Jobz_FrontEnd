import styled from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
margin-left:50px;
margin-top:100px;
#GroupInformation {
    height: 300px;
    margin-right:400px;
    display: flex;
    #link{
        position:absolute;
        margin-top:30px;
        display: flex;
        align-items: center;
        #service{
            padding-left: 15px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            /* identical to box height, or 171% */

            text-align: center;
            letter-spacing: 0.2px;

            /* second-text-color */

            color: #737373;
            }
        }
    a{
        padding-right: 15px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        text-decoration: none;
        text-align: center;
        letter-spacing: 0.2px;


        color: #252B42;
    }
    #title{
        margin-top:138px;
        width: 175px;
        height: 32px;
        
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        /* identical to box height, or 133% */
        
        text-align: center;
        letter-spacing: 0.1px;
        
        /* text-color */
        
        color: #252B42;
    }
    #description{
        position: static;
        width: 617px;
        height: 26px;
        left: calc(50% - 617px/2);
        top: 42px;

        /* paragraph */

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        /* identical to box height, or 162% */

        letter-spacing: 0.2px;

        /* second-text-color */

        color: #737373;
    }
    #order-by{
        display:flex;
        align-items: center;
        #order{
            padding-right: 15px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
    
            letter-spacing: 0.2px;
    
    
            color: #737373;
        }
    }
    margin-bottom:900px;
}
`