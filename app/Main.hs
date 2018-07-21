module Main where

import System.Random (randomRIO)

import Vocabulary (adjs, nouns)

endAs, endNs :: Int
endAs = length adjs - 1
endNs = length nouns - 1

getRandomName :: IO String
getRandomName = do
    randomAdj <- randomRIO (0, endAs)
    randomNouns <- randomRIO (0, endNs)
    let adj = adjs !! randomAdj
    let noun = nouns !! randomNouns
    return $ mconcat [adj, "_", noun]

main :: IO ()
main = do
    r <- getRandomName
    print r

