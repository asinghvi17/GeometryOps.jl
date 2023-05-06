# # Coordinate flipping

# This function is a minimal and simple example of how to wrap `apply` for your own purposes.

# It swaps x and y if the geometry is 2d,
# and reorders (x, y, z) to (y, x, z) if the geometry is 3d.
"""
    flip(obj)

Swap all of the x and y coordinates in obj, otherwise
keeping the original structure (but not necessarily the
original type).
"""
function flip(geom) 
    if GI.is3d(geom)
        return apply(PointTrait, geom) do point
            (GI.y(p), GI.x(p), GI.z(p))
        end
    else
        return apply(PointTrait, geom) do point
            (GI.y(p), GI.x(p))
        end
    end
end
