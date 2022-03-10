import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { HomeFragmentDoc } from '../shapes/folders/home.generated';
export type HomeQueryVariables = Types.Exact<{
  path: Types.Scalars['String'];
}>;


export type HomeQuery = (
  { __typename?: 'Query' }
  & { home?: Types.Maybe<(
    { __typename?: 'Document' }
    & Pick<Types.Document, 'id'>
    & { title?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, intro?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, hero?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, heroCTA?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, references?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, body?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, highlightedFeatures?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )> }
  ) | (
    { __typename?: 'Folder' }
    & Pick<Types.Folder, 'id'>
    & { title?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, intro?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, hero?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, heroCTA?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, references?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, body?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, highlightedFeatures?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )> }
  ) | (
    { __typename?: 'Product' }
    & Pick<Types.Product, 'id'>
    & { title?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, intro?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, hero?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, heroCTA?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, references?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, body?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )>, highlightedFeatures?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )> }
  )> }
);


export const HomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Home"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"home"},"name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"home"}}]}}]}},...HomeFragmentDoc.definitions]} as unknown as DocumentNode<HomeQuery, HomeQueryVariables>;