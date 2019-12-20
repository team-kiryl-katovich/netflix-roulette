import * as React from 'react';

import { Loader } from '@common/components';
import { MoviePaginationProps, MoviePaginationState } from './models';

export class MoviePagination extends React.Component<MoviePaginationProps, MoviePaginationState> {
  constructor(props: MoviePaginationProps) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private getMoreItems() {
    const { moviesCount, offset, pageSize, fetch } = this.props;
    if (moviesCount < offset.limit) {
      fetch({
        limit: pageSize,
        offset: offset.offset + pageSize,
      });
    }
  }

  private checkBottom = (): boolean => {
    const { body, documentElement: html } = document;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = window.innerHeight + window.pageYOffset + 1;
    return windowBottom >= docHeight;
  };

  private handleScroll = () => {
    if (!this.checkBottom()) {
      return;
    }
    const { loading } = this.props;
    if (loading) {
      return;
    }
    this.getMoreItems();
  };

  render() {
    const { loading, children } = this.props;
    return (
      <>
        {children}
        <Loader loading={loading} />
      </>
    );
  }
}
