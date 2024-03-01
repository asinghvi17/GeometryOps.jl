<img width="400" alt="GeometryOps.jl" src="https://github.com/asinghvi17/GeometryOps.jl/assets/32143268/1bfef07f-a0ef-4351-a643-2049c27b8261">

![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)
[![Stable](https://img.shields.io/badge/docs-stable-blue.svg)](https://asinghvi17.github.io/GeometryOps.jl/stable/)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://asinghvi17.github.io/GeometryOps.jl/dev/)
[![Build Status](https://github.com/asinghvi17/GeometryOps.jl/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/asinghvi17/GeometryOps.jl/actions/workflows/CI.yml?query=branch%3Amain)

<img src="docs/src/assets/logo.png" alt="GeometryOps logo" width="250">

GeometryOps.jl is a package for geometric calculations on (primarily 2D) geometries.

The driving idea behind this package is to unify all the disparate packages for geometric calculations in Julia, and make them [GeoInterface.jl](https://github.com/JuliaGeo/GeoInterface.jl)-compatible. We seem to be focusing primarily on 2/2.5D geometries for now.

Most of the usecases are driven by GIS and similar Earth data workflows, so this might be a bit specialized towards that, but methods should always be general to any coordinate space.

We welcome contributions, either as pull requests or discussion on issues!

## Methods 

GeometryOps tries to offer most of the basic geometry operations you'd need, implemented in pure Julia and accepting any GeoInterface.jl compatible type.

- General geometry methods (OGC methods): `equals`, `extent`, `distance`, `crosses`, `contains`, `intersects`, etc
- Targeted function application over large nested geometries (`apply`)
- `signed_area`, `centroid`, `distance`, etc for valid geometries
- Line and polygon simplification (`simplify`)
- Polygon clipping, `intersection`, `difference` and `union`
- Generalized barycentric coordinates in polygons (`barycentric_coordinates`)
- Projection of geometries between coordinate reference systems using [Proj.jl](https://github.com/JuliaGeo/Proj.jl)
- Polygonization of raster images by contour detection (`polygonize`)

See the "API" page in the docs for a more complete list!

### Planned additions

- Arclength interpolation (absolute and relative)
- Buffering, hulls 
- Some kind of `applyreduce` primitive ([#38](https://github.com/asinghvi17/GeometryOps.jl/issues/38))
- Checks for valid geometries (empty linestrings, null points, etc) ([#14](https://github.com/asinghvi17/GeometryOps.jl/issues/14))
- Operations on spherical (non-Euclidean) geometry ([#17](https://github.com/asinghvi17/GeometryOps.jl/issues/17))
