using Test
 
import GeoInterface as GI
import GeometryOps as GO
using GeometryOps.Proj.CoordinateTransformations
using Rotations

@testset "transform" begin
    geom = GI.Polygon([GI.LinearRing([(1, 2), (3, 4), (5, 6), (1, 2)]), 
                       GI.LinearRing([(3, 4), (5, 6), (6, 7), (3, 4)])])
    translated = GI.Polygon([GI.LinearRing([[5.5, 2.5], [7.5, 4.5], [9.5, 6.5], [5.5, 2.5]]), GI.LinearRing([[7.5, 4.5], [9.5, 6.5], [10.5, 7.5], [7.5, 4.5]])])
    f = CoordinateTransformations.Translation(3.5, 1.5)
    @test GO.transform(f, geom) == translated
    GO.transform(p -> one(RotMatrix{2}) * p, geom)
    == translated
    

end

