import {BtnContainerLoadMore, BtnLoadMore } from "./loadMoreStyled";

export default function LoadMore({limitDecrement}) {
    return (
        <BtnContainerLoadMore>
                <BtnLoadMore type="button" onClick={limitDecrement}>Load More</BtnLoadMore>
        </BtnContainerLoadMore>
    )
}