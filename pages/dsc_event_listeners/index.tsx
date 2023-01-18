import { Box, Flex, FlexItem, H1, H4, Panel, Table, Button } from '@bigcommerce/big-design';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { authSlice } from "../../redux/authRedux";
import { webhookSlice } from 'redux/webhookRedux';
import { useSession } from '../../context/session';
import jwt_decode from "jwt-decode";

const DscEventListners = () => {
    const logTitle = " DscEventListners() ";
    console.log(logTitle, "EXECUTED!");
    const { context } = useSession();
    let decodedContext = "";
    if(context) decodedContext = context ? jwt_decode(context) : "";
    
    const dispatch = useDispatch();
    const authState = useSelector((state:any) => state.auth);
    const webhookState = useSelector((state:any) => state.webhook);

    let { subscribedEventsList }  = webhookState.value;
    console.log(logTitle+"subscribedEventsList", subscribedEventsList)
    return (
        <>
            <Panel header="Event Subscribtion Options" id="event_subscription_options">
                <Flex>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                () => {
                                    fetchSubscribedEvents(authState, dispatch, decodedContext);
                                }
                            }
                        >
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Refresh_icon.svg/2048px-Refresh_icon.svg.png' width='25px'/>
                        </Button>
                    </FlexItem>
                </Flex>
                <Flex>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                ()=> {
                                    subscribeToEvent(authState, dispatch, "store/customer/created")
                                }
                            }
                        >
                            Add Customer Create Listener
                        </Button>
                    </FlexItem>
                    <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                ()=> {
                                    subscribeToEvent(authState, dispatch, "store/customer/updated")
                                }
                            }
                        >
                            Add Customer Update Listener
                        </Button>
                    </FlexItem>
                    {/* <FlexItem
                        marginRight="small"
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary" 
                            onClick={
                                ()=> {
                                    subscribeToEvent(authState, dispatch, "store/customer/deleted")
                                }
                            }
                        >
                            Add Customer Delete Listener
                        </Button>
                    </FlexItem> */}
                </Flex>
                <Flex>
                    <FlexItem
                        marginRight="small"    
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary"
                            onClick={
                                () => {
                                    subscribeToEvent(authState, dispatch, "store/product/updated")
                                }
                            }
                        >
                            Add Products Update Listener
                        </Button>
                    </FlexItem>
                </Flex>
                {/* 
                <Flex>
                    <FlexItem
                        marginRight="small"    
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary"
                            onClick={
                                () => {
                                    fetchBigCommerceCustomers()
                                }
                            }
                        >
                            Get Customers
                        </Button>
                    </FlexItem>
                    <FlexItem
                        marginRight="small"    
                    >
                        <Button 
                            marginTop="small" 
                            variant="primary"
                            onClick={
                                () => {
                                    getRecentlyViewedProducts("l1m6wbgej9", "hv0w0sza1ja3eel4gzajfahn6sq5rl7", "11", )
                                }
                            }
                        >
                            Get Recently Viewed Products
                        </Button>
                    </FlexItem>
                </Flex> 
                */}
                <Table
                    columns={[
                        {
                            header: "ID",
                            hash: "id",
                            tooltip: "Webhook ID",
                            render: ({ id })=> id
                        },
                        {
                            header: "Event Scope",
                            hash: "scope",
                            tooltip: "Webhook Event Scope",
                            render: ({ scope }) => scope
                        },
                        { 
                            header: 'Action', 
                            hideHeader: true, 
                            hash: 'delete_webhook', 
                            render: ({ id }) => renderDeleteButton(id, authState, dispatch) 
                        }
                    ]}
                    items={subscribedEventsList?.length > 0 ? subscribedEventsList : []}
                    itemName="Subscribed Events"
                ></Table>
            </Panel>
        </>
    )
}

const fetchSubscribedEvents = (authState, dispatch, decodedContext) => {
    const logTitle = " fetchSubscribedEvents() ";
    try {

        getEventsList(authState);
        if (decodedContext) {
            const requestUrl = "/api/webhook/get_subscribed_events";
            const requestHeaders = {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
            };
            const requestBody = {
                authInfo: authState.value.authInfo,
            };
            fetch(requestUrl, {
                method: "POST",
                headers: requestHeaders,
                body: JSON.stringify(requestBody)
            })
            .then(response=> response.json())
            .then(responseObj => {
                console.log(logTitle+"responseObj", responseObj);
                if (responseObj?.title == "Unauthorized") {
                    getAndSetAuthInfo(decodedContext, dispatch)
                } else {
                    let subscribedEventsList = [];
                    if (responseObj?.data) {
                        responseObj.data.map(dataObj => {
                            subscribedEventsList.push(dataObj);
                        });
                        dispatch(webhookSlice.actions.setWebhooksInfo({ subscribedEventsList }));
                    }
                }
            });
        }
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

const getEventsList = (authState) => {
    const logTitle = " getEventsList() ";
    try {
        const requestUrl = "/api/webhook/get_events";
        const requestHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        };
        const requestBody = {
            authInfo: authState.value.authInfo
        }
        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
        })
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

const subscribeToEvent = (authState, dispatch, eventScope) => {
    const logTitle = " subscribeToEvent() ";
    try {
        const requestUrl = "/api/webhook";
        const requestHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        };
        const requestBody = {
            authInfo: authState.value.authInfo,
            eventScope
        };
        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle+"responseObj", responseObj);
            if(responseObj.status == 422){
                alert(responseObj.title);
            } else {
                dispatch(webhookSlice.actions.addEventSubscription({newEventObj: responseObj.data}));
            }
        });
    } catch(e){
        console.error("ERROR IN"+logTitle, e);
    }
}

const getAndSetAuthInfo = (decodedContext, dispatch) => {
    const logTitle = " getAndSetAuthInfo() ";
    console.log(logTitle, "<--- EXECUTED! --->")
    fetch("/api/netsuite/get_auth", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        },
        body: JSON.stringify(decodedContext)
    })
    .then(response => response.json())
    .then(responseObj => {
        console.log(logTitle+"responseObj", responseObj);
        if (responseObj?.data?.authInfoJson) dispatch(authSlice.actions.setStoreAuthInfo({authInfo: responseObj.data.authInfoJson}));
    });
}

const renderDeleteButton = (webhookId, authState, dispatch) => {
    const logTitle = " renderDeleteButton() ";
    try{
        return (
            <Button 
                marginTop="small" 
                variant="secondary" 
                onClickCapture={()=> {
                    unsubscribeFromEvent(webhookId, authState, dispatch)
                }}
            >
                Delete
            </Button>
        )
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

const unsubscribeFromEvent = (webhookId, authState, dispatch) => {
    const logTitle = " unsubscribeFromEvent() ";
    try{
        const requestUrl = "/api/webhook/unsubscribe_from_event";
        const requestHeaders = {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'        
        };

        const requestBody = {
            authInfo: authState.value.authInfo,
            webhookId
        };

        fetch(requestUrl, {
            method: "POST",
            headers: requestHeaders,
            body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(responseObj => {
            console.log(logTitle + "responseObj", responseObj);
            dispatch(webhookSlice.actions.removeEventSubscription({oldEventObj: responseObj.data}));
        });
    } catch(e) {
        console.error("ERROR IN"+logTitle, e);
    }
}

export default DscEventListners;