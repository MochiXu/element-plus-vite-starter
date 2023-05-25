# Benchmarking Vector Search Engines 🚀
🌵 As an Open Source vector search engine, we are often compared to the competitors and asked about our performance vs the other tools. But the answer was never simple, as the world of vector databases lacked a unified open benchmark that would show the differences. So we created one, making some bold assumptions about how it should be done. Here we describe why we think that’s the best way.

That is why we perform our benchmarks on exactly the same hardware, which you can rent from any cloud provider. It does not guarantee the best performance, making the whole process affordable and reproducible, so you can easily repeat it yourself. So in our benchmarks, we **focus on the relative numbers**, so it is possible to **compare** the performance of different engines given equal resources.

The list will be updated:

- Upload & Search speed on single node - [Benchmark](https://qdrant.tech/benchmarks/single-node-speed-benchmark/)
- Filtered search benchmark - [Benchmark](https://qdrant.tech/benchmarks/#filtered-search-benchmark)
- Memory consumption benchmark - TBD
- Cluster mode benchmark - TBD

Some of our experiment design decisions are described at [F.A.Q Section.](https://qdrant.tech/benchmarks/#benchmarks-faq)

Suggest your variants of what you want to test in our [Discord channel!](https://qdrant.to/discord)

# Single node speed benchmark
We benchmarked several engines using various configurations of them on 3 different datasets to check how the results may vary. Those datasets may have different vector dimensionality but also vary in terms of the distance function being used. We also tried to capture the difference we can expect while using some different configuration parameters, for both the engine itself and the search operation separately. It is also quite interesting to see how the number of search threads may impact the performance of the engines, so we added that option as well.

# Single node speed benchmark

We benchmarked several engines using various configurations of them on 3 different datasets to check how the results may vary. Those datasets may have different vector dimensionality but also vary in terms of the distance function being used. We also tried to capture the difference we can expect while using some different configuration parameters, for both the engine itself and the search operation separately. It is also quite interesting to see how the number of search threads may impact the performance of the engines, so we added that option as well.

# Single node speed benchmark

We benchmarked several engines using various configurations of them on 3 different datasets to check how the results may vary. Those datasets may have different vector dimensionality but also vary in terms of the distance function being used. We also tried to capture the difference we can expect while using some different configuration parameters, for both the engine itself and the search operation separately. It is also quite interesting to see how the number of search threads may impact the performance of the engines, so we added that option as well.

