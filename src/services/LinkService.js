import {useHttp} from "../hooks/http.hook";

const useLinkService = () => {
    const {loading, error, request} = useHttp();

    const getLinks = async () => {
        const path = `/data/links/links.json`;

        const response = await request(path);

        return transformResponse(response);
    }

    const transformResponse = (response) => {
        return response.links;
    }

    return {loading, error, getLinks};
}

export default useLinkService;