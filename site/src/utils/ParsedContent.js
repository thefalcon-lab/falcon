import React from 'react'
import ContentParser from 'gatsby-plugin-wordpress-parser'
import { cf7ParserFunction } from 'gatsby-plugin-wpcf7'
import fancyBoxParserFunction from 'gatsby-plugin-wordpress-fancybox'
import mapboxParserFunction from 'gatsby-plugin-wp-mapbox'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'

const ParsedContent = ({ content }) => {
  const options = useThemeOptions()
  const parserFunctions = [cf7ParserFunction, mapboxParserFunction]
  if (options.addFancyBox) {
    parserFunctions.push(fancyBoxParserFunction)
  }
  return <ContentParser content={content} customFn={parserFunctions} />
}

export default ParsedContent
