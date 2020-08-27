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

const Title = styled.div`
    color: #666;
    border-bottom: 3px double #aaa;
    font-family: Noto Sans KR;
    font-weight: 900;
`;

const CardHeader = styled.div`
    font-size: 16px;
    display: flex;
    align-items: center;
`;

const Card = styled.div`
    border-bottom: 1px solid silver;
    margin: 8px 6px 8px 6px;
    padding: 6px;
    border-left: 6px solid silver;
`;

const CardBadge = styled.div`
    background-color: ${(props) => props.badgeColor};
    color: white;
    border-radius: 5px;
    font-size: 10.5px;
    font-weight: bold;
    padding: 3px 5px 3px 5px;
    margin-right: 6px;
`;

const CardTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const CardDescription = styled.div`
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const CardFooter = styled.div`
    display: flex;
`;

const CardAuthor = styled.div`
    font-size: 12px;
    font-weight: bold;
    margin-right: 6px;
`;

const CardDate = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: grey;
    margin-right: 8px;
`;

const CardInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-right: 4px;
`;

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: this.props.default,
        };
    }

    componentDidMount() {
        const cardListComp = document.getElementById('card-list-component');
        cardListComp.onscroll = (e) => {
            if (
                e.target.scrollTop + e.target.offsetHeight + 20 >
                e.target.scrollHeight
            ) {
                this.setState({
                    offset: this.state.offset + this.props.offset,
                });
            }
        };
    }

    render() {
        const { data, title } = this.props;
        const splittedData = data.slice(0, this.state.offset);
        return (
            <Wrapper id="card-list-component">
                <Title>{title || `undefined`}</Title>
                {splittedData.map((item, i) => {
                    return (
                        <Card key={i}>
                            <CardHeader>
                                {item.badgeText && (
                                    <CardBadge
                                        badgeColor={item.badgeColor || 'grey'}>
                                        {item.badgeText}
                                    </CardBadge>
                                )}
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardDescription>
                                {item.description}
                            </CardDescription>
                            <CardFooter>
                                <CardAuthor>{item.author}</CardAuthor>
                                <CardDate>{item.date}</CardDate>
                                {item.comment && (
                                    <CardInfo>
                                        <AiOutlineComment />
                                        &nbsp;
                                        <div>{item.comment}</div>
                                    </CardInfo>
                                )}
                                {item.view && (
                                    <CardInfo>
                                        <AiOutlineEye />
                                        &nbsp;
                                        <div>{item.view}</div>
                                    </CardInfo>
                                )}
                                {item.share && (
                                    <CardInfo>
                                        <AiOutlineShareAlt />
                                        &nbsp;
                                        <div>{item.share}</div>
                                    </CardInfo>
                                )}
                                {item.heart && (
                                    <CardInfo>
                                        <AiOutlineHeart />
                                        &nbsp;
                                        <div>{item.heart}</div>
                                    </CardInfo>
                                )}
                            </CardFooter>
                        </Card>
                    );
                })}
            </Wrapper>
        );
    }
}

CardList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            comment: PropTypes.number,
            heart: PropTypes.number,
            view: PropTypes.number,
            share: PropTypes.number,
            badgeText: PropTypes.string,
            badgeColor: PropTypes.string,
        })
    ),
    title: PropTypes.string.isRequired,
    default: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
};

export default CardList;
