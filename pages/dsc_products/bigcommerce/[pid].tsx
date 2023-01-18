import { useRouter } from 'next/router';
import { useSelector, useDispatch} from 'react-redux';
import { Box, Flex, FlexItem, H1, H4, Panel, Table, Button } from '@bigcommerce/big-design';
import styled from 'styled-components';

const BigCommerceProductInfo = (props) => {
    const logTitle = " BigCommerceProductInfo() ";
    try {
        console.log(logTitle, "EXECUTED!")
        const router = useRouter();
        const bigcomPid = +(router.query?.pid);
        const bigcommerceProductsState = useSelector((state:any) => state.bigcommerceProducts);
        const { productsMappingObject } = bigcommerceProductsState.value;
        const productDataObject = productsMappingObject[bigcomPid] ? productsMappingObject[bigcomPid] : {};
        console.log(logTitle + "bigcomPid", bigcomPid);
        const handleBackClick = () => {
            const logTitle = " handleBackClick() ";
            try{
                router.push("/dsc_products/");
            }catch(e){
                console.error("ERROR IN"+logTitle, e)
            }
        }

        return (
            <Panel>
                <H1>Product Details Page</H1>
                <StyledBox className='boxStyle'>
                    <strong>Product Name: </strong> {productDataObject.name}
                </StyledBox>
                <StyledBox className='boxStyle'>
                    <strong>Product In Stock: </strong>  {productDataObject.inventory_level}
                </StyledBox>
                <StyledBox className='boxStyle'>
                    <strong>Product Price: </strong>  {productDataObject.price}
                </StyledBox>
                <StyledBox className='boxStyle'>
                    <strong>Product Description: </strong>  {productDataObject.description}
                </StyledBox>
                <Flex>
                    <FlexItem
                        marginRight="small"    
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary"
                            onClick={
                                () => {
                                    setAsRecentlyViewedProduct("l1m6wbgej9", "hv0w0sza1ja3eel4gzajfahn6sq5rl7", "11", bigcomPid, "12-22-2022")
                                }
                            }
                        >
                            Set As Recently Viewed Product
                        </Button>
                    </FlexItem>
                    <FlexItem>
                        <Button marginTop="small" variant="secondary" onClick={handleBackClick}>
                            Back
                        </Button>
                    </FlexItem>
                </Flex>
            </Panel>
        )
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

const StyledBox = styled(Box)`
    margin-right: 10px;
    padding: 3px;
`;

function setAsRecentlyViewedProduct(storeHash, accessToken, customerId, productId, todayDate){
    const logTitle = " setAsRecentlyViewedProduct() ";
    try {
        const requestUrl = "https://2889-119-153-103-211.ngrok.io/api/bigcommerce/set_recently_viewed_items";
        const requestHeaders = {
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'PUT, POST, PATCH, DELETE, GET',
            'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'     
        }
        const requestBody = {
            storeHash,
            accessToken,
            customerId,
            productId,
            todayDate
        };
        fetch(requestUrl, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: requestHeaders
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle, e)
    }
}

export default BigCommerceProductInfo;