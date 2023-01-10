import useHttp from "../../hook/useHttp";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import { toGetNews, toDelete } from "../../redux/actions";
import NewsListItem from "../NewsListItem";
import Error from "../Error";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { toast } from "react-toastify";
import "../style/cssTransition.css";

function NewsList() {
  const filterLoading = useSelector((state) => state.filter.filterLoading);

  const filteredNews = useSelector((state) => {
    if (state.filter.activeFilter === "all") {
      return state.news.news;
    } else {
      return state.news.news.filter(
        (s) => s.category === state.filter.activeFilter
      );
    }
  });
  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    dispatch(toGetNews(request));
    //eslint-disable-next-line
  }, []);

  const onDelete = useCallback((id) => {
    dispatch(toDelete(request, id));

    toast.info("Successfully deleted!");
    //eslint-disable-next-line
  }, []);

  if (filterLoading === "loading") {
    return <Spinner />;
  } else if (filterLoading === "error") {
    return <Error />;
  }

  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={500} classNames="item">
          <Error />
        </CSSTransition>
      );
    }

    return arr
      .map((item) => {
        return (
          <CSSTransition key={item.id} timeout={500} classNames="item">
            <NewsListItem
              onDelete={() => {
                onDelete(item.id);
              }}
              {...item}
            />
          </CSSTransition>
        );
      })
      .reverse();
  };

  const element = renderNewsList(filteredNews);

  return <TransitionGroup component="ul">{element}</TransitionGroup>;
}

export default NewsList;
