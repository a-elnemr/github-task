import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../config/color';
import {useSelector} from 'react-redux';
import RepoMainContent from './RepoMainContent';
import TrendingRepo from './TrendingRepo';
import ExploreRepoDetails from './ExploreRepoDetails';

function ExploreCard({
  starCount,
  RepoTitle,
  RepoDescription,
  RepoUpdatedAt,
  RepoLang,
}) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <RepoMainContent RepoTitle={RepoTitle} RepoDescription={RepoDescription}>
      {{
        isTrending: <TrendingRepo starCount={starCount} />,
        repoDetails: (
          <ExploreRepoDetails
            RepoLang={RepoLang}
            RepoUpdatedAt={RepoUpdatedAt}
          />
        ),
      }}
    </RepoMainContent>
  );
}

const styles = StyleSheet.create({});

export default ExploreCard;
