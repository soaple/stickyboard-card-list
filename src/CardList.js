// src/CardList.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    AiOutlineComment,
    AiOutlineEye,
    AiOutlineShareAlt,
    AiOutlineHeart,
} from 'react-icons/ai';

const Wrapper = styled.div`
    height: 100%;
    padding: 8px;
    overflow: scroll;
`;

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     *    {
        title: '호호',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
     */

    render() {
        const { data, title } = this.props;
        console.log(data);
        return (
            <Wrapper>
                <div
                    style={{
                        borderBottom: '3px double black',
                        fontFamily: 'Noto Sans KR',
                        fontWeight: '900',
                    }}>
                    {title}
                </div>
                {data.map((item) => {
                    console.log(item);
                    return (
                        <div
                            style={{
                                borderBottom: '1px solid grey',
                                margin: '6px',
                                padding: '6px',
                                backgroundColor: '#f7f7f7',
                            }}>
                            <div
                                style={{
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                <div
                                    style={{
                                        backgroundColor: item.badgeColor,
                                        color: 'white',
                                        borderRadius: '5px',
                                        fontSize: '10px',
                                        fontWeight: 'bold',
                                        padding: '2px',
                                    }}>
                                    공지
                                </div>
                                &nbsp;
                                <div
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                    }}>
                                    {item.title}
                                </div>
                            </div>
                            <div
                                style={{
                                    fontSize: '12px',
                                    marginTop: '5px',
                                    marginBottom: '10px',
                                }}>
                                {item.description}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                    }}>
                                    {item.name}&nbsp;&nbsp;
                                </div>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        color: 'grey',
                                    }}>
                                    {item.date}&nbsp;&nbsp;
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                    }}>
                                    <AiOutlineComment />
                                    &nbsp;
                                    <div>{item.comment}</div>&nbsp;
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                    }}>
                                    <AiOutlineEye />
                                    &nbsp;
                                    <div>{item.view}</div>&nbsp;
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                    }}>
                                    <AiOutlineShareAlt />
                                    &nbsp;
                                    <div>{item.view}</div>&nbsp;
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                    }}>
                                    <AiOutlineHeart />
                                    &nbsp;
                                    <div>{item.view}</div>&nbsp;
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Wrapper>
        );
    }
}

CardList.propTypes = {};

export default CardList;
