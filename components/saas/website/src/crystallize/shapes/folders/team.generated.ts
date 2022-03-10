import * as Types from '../../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ComponentFragmentDoc, ContentFragmentDoc } from '../../fragments/content.generated';
import { MemberFragmentDoc } from '../documents/member.generated';
export type Team_Document_Fragment = (
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
  )>, values?: Types.Maybe<(
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
  )>, team?: Types.Maybe<(
    { __typename?: 'Component' }
    & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | (
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
        ) | (
          { __typename: 'ItemRelationsContent' }
          & { items?: Types.Maybe<Array<(
            { __typename?: 'Document' }
            & Pick<Types.Document, 'id'>
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
          )>> }
        ) | (
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
    ) | { __typename?: 'DatetimeContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
  )> }
);

export type Team_Folder_Fragment = (
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
  )>, values?: Types.Maybe<(
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
  )>, team?: Types.Maybe<(
    { __typename?: 'Component' }
    & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | (
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
        ) | (
          { __typename: 'ItemRelationsContent' }
          & { items?: Types.Maybe<Array<(
            { __typename?: 'Document' }
            & Pick<Types.Document, 'id'>
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
          )>> }
        ) | (
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
    ) | { __typename?: 'DatetimeContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
  )> }
);

export type Team_Product_Fragment = (
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
  )>, values?: Types.Maybe<(
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
  )>, team?: Types.Maybe<(
    { __typename?: 'Component' }
    & { content?: Types.Maybe<{ __typename?: 'BooleanContent' } | { __typename?: 'ComponentChoiceContent' } | (
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
        ) | (
          { __typename: 'ItemRelationsContent' }
          & { items?: Types.Maybe<Array<(
            { __typename?: 'Document' }
            & Pick<Types.Document, 'id'>
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
            & { name?: Types.Maybe<(
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
            )>, title?: Types.Maybe<(
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
            )>, avatar?: Types.Maybe<(
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
            )>, social?: Types.Maybe<(
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
          )>> }
        ) | (
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
    ) | { __typename?: 'DatetimeContent' } | { __typename?: 'GridRelationsContent' } | { __typename?: 'ImageContent' } | { __typename?: 'ItemRelationsContent' } | { __typename?: 'LocationContent' } | { __typename?: 'NumericContent' } | { __typename?: 'ParagraphCollectionContent' } | { __typename?: 'PropertiesTableContent' } | { __typename?: 'RichTextContent' } | { __typename?: 'SelectionContent' } | { __typename?: 'SingleLineContent' } | { __typename?: 'VideoContent' }> }
  )> }
);

export type TeamFragment = Team_Document_Fragment | Team_Folder_Fragment | Team_Product_Fragment;

export const TeamFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"team"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"title","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"intro"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"intro","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"hero"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"hero","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"values"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"values","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"team"},"name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"team","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentChunkContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"chunks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"content"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemRelationsContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"member"}}]}}]}}]}}]}}]}}]}}]}}]}},...ComponentFragmentDoc.definitions,...ContentFragmentDoc.definitions,...MemberFragmentDoc.definitions]} as unknown as DocumentNode<TeamFragment, unknown>;