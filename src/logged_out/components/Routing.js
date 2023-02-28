import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import Video from "./video/Video";
import videoPost from "./video/VideoPost";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const { blogPosts, selectBlog, selectHome, videoPosts, selectVideo } = props;
  useLocationBlocker();
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      {videoPosts.map((post) => (
      <PropsRoute
      path={post.url}
      component={videoPost}
      title={post.title}
      key={post.title}
      src={post.src}
      date={post.date}
      content={post.content}
      otherArticles={videoPosts.filter(
        (videoPost) => videoPost.id !== post.id
      )}
    />
    ))}
     <PropsRoute
        exact
        path="/video"
        component={Video}
        selectVideo={selectVideo}
        videoPosts={videoPosts}
      />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  videoPosts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
  selectVideos: PropTypes.func.isRequired,
};

export default memo(Routing);
