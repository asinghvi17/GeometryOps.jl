# #  Difference Polygon Clipping
export difference

# The 'difference' function returns the difference of two polygons. Note that this file
# currently only contains the difference of two polygons, which will always return
# a vector of a vector of a vector of tuples of floats.
# The algorithm to determine the difference was adapted from "Efficient 
# clipping of efficient polygons," by Greiner and Hormann (1998).
# DOI: https://doi.org/10.1145/274363.274364

"""
    difference(geom1, geom2)::Vector{Vector{Vector{Tuple{Float64}}}}

Returns the difference of geom1 minus geom2. The vector of a vector inside
the outermost vector is empty if the difference is empty. If the polygons
don't intersect, it just returns geom1.

## Example 

```jldoctest
import GeoInterface as GI, GeometryOps as GO

poly1 = GI.Polygon([[[0.0, 0.0], [5.0, 5.0], [10.0, 0.0], [5.0, -5.0], [0.0, 0.0]]])
poly2 = GI.Polygon([[[3.0, 0.0], [8.0, 5.0], [13.0, 0.0], [8.0, -5.0], [3.0, 0.0]]])
GO.difference(poly1, poly2)

# output
1-element Vector{Vector{Vector{Tuple{Float64, Float64}}}}:
[[[(6.5, 3.5), (5.0, 5.0), (0.0, 0.0), (5.0, -5.0), (6.5, -3.5), (3.0, 0.0), (6.5, 3.5)]]]
```
"""
difference(geom_a, geom_b) =
    difference(GI.trait(geom_a), geom_a, GI.trait(geom_b), geom_b)
    
function difference(::GI.PolygonTrait, poly_a, ::GI.PolygonTrait, poly_b)
    # Get the exterior of the polygons
    ext_poly_a = GI.getexterior(poly_a)
    ext_poly_b = GI.getexterior(poly_b)
    # Find the difference of the exterior of the polygons
    a_list, b_list, a_idx_list = _build_ab_list(ext_poly_a, ext_poly_b)
    traced_polys = _trace_polynodes(a_list, b_list, a_idx_list, (x, y) -> (x ⊻ y) ? 1 : (-1))
    polys = [GI.Polygon([p]) for p in traced_polys]
    if isempty(polys)
        if _point_filled_curve_orientation(b_list[1].point, ext_poly_a) == point_in
            poly_a_b_hole = GI.Polygon([ext_poly_a, ext_poly_b])
            push!(polys, poly_a_b_hole)
        elseif _point_filled_curve_orientation(a_list[1].point, ext_poly_b) != point_in
            # Two polygons don't intersect and are not contained in one another
            push!(polys, GI.Polygon([ext_poly_a]))
        end
    end

    # If the original polygons had holes, take that into account.
    if GI.nhole(poly_a) != 0 || GI.nhole(poly_b) != 0
        _remove_holes_from_polys!(polys, GI.gethole(poly_a))
        for hole in GI.gethole(poly_b)
            new_polys = intersection(GI.Polygon([hole]), poly_a)
            if length(new_polys) > 0
                append!(polys, new_polys)
            end
        end
    end
    return polys
end